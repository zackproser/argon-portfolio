---
title: A deep dive into the Tea Tutor Bubbletea quiz application 
category: blog
image: teatutor-logo.png
---

![Tea Tutor Bubbletea SSH Quiz Application](/teatutor-logo.png)
  
[View and clone the project here](https://github.com/zackproser/teatutor)

In this post, I’ll do a deep-dive on my recently published open-source app, Tea Tutor. This application allows you to quickly define and serve colorful and interactive quizzes on any topic over SSH, and it was written using Charm’s Bubbletea and Wish libraries.

## What is Bubbletea and why should I care?

[Charm](https://charm.sh) has built a truly impressive suite of terminal user interface (TUI) libraries and tools. For Golang developers seeking to build rich applications that approach the interactivity of HTML in the terminal, solutions like Bubbletea, complimented by Glamour and Lipgloss, are some of the best options today.

## Introducing the Bubbletea blog post series

This article is the first in a series about building interactive terminal applications with Bubbletea. The next posts in the series are:

* [Introducing the Tea Tutor program and my Bubbletea blog post series](https://medium.com/@zackproser/introducing-tea-tutor-a-quiz-service-you-connect-to-over-ssh-564efe963411)
* *This post* — A deep dive into the Tea Tutor program, including tips and tricks figured out
* COMING SOON — How to serve your Bubbletea program over SSH with Wish
* COMING SOON — Packaging your Bubbletea program using Infrastructure as Code techniques to make deploying it easier
* COMING SOON — Future enhancements planned for Tea Tutor

## Why did I build this app?

My usual answer: for fun and practice.

I knew I wanted to build something non-trivial with Bubbletea. Ever since I stumbled across the Charm repositories, I was impressed with their examples and demos and the synergy between their open-source projects.

I also build a lot of command line interfaces (CLIs) in my day job as an infrastructure / automation / DevOps engineer, so I’m always keeping an eye out for better ways of doing things.

## Practice, practice, practice

My initial forays into working with Bubbletea were painful, as I regularly encountered crashes or couldn’t quite get things wired up and behaving the exact way I wanted.

In the end, I really just needed to fill the gaps in my own knowledge, and change my usual habits of approaching a Golang program until I was able to make reliable progress.

Anyone who has written or maintained highly evented Javascript applications, or used Backbone.js before, is likely going to find Bubbletea’s patterns familiar, and the Bubbletea maintainers have included two great tutorials, and are publishing content regularly across YouTube and Twitch.

My difficulty stemmed from my own incorrect mental models, and from finicky pieces like panics due to trying to access an out of bounds index in a slice — which can commonly occur when you’re navigating through some collection in your terminal UI (TUI). I’ll share some tips on how I made this behavior more reliable in my app a little later on.

>  Bubble Tea is based on the functional design paradigms of The Elm Architecture, which happens to work nicely with Go. It’s a delightful way to build applications.

I never doubted making it to the other side was worth it. Now that I have my head around the general operating model of a Bubbletea program, adding new functionality to my existing program is indeed more straightforward, easier to keep organized and yes, even, at times, delightful.

## Thinking through my desired experience

To begin with, I started thinking through the core app experience. I knew my core use case was to provide a very low friction, yet effective study aid for folks preparing to take an AWS certification exam.

I wanted anyone studying for AWS certifications, who finds themselves with a few spare minutes, to be able to fire off a simple

`ssh quiz.<somedomain>.com`

command and immediately be served their own private instance of a familiar slide-deck-like experience that asks them multiple-choice AWS certification questions and records all their answers.

When the user submits their final answer, their score should be calculated by looking through all their submissions and comparing them to the correct answers. The user should get an easy to scan report showing them each question, their response and whether or not their response was correct.

This formed the kernel of my app idea.

## Modeling the data

Now that I knew what I wanted to build, it was time to figure out the data model.

The data model for questions is quite straightforward. Once I had done enough mocking by hardcoding a few questions as variables in main.go to be able to figure out the general flow I wanted for the UI, I knew I wanted to represent my questions in a separate YAML file that could be loaded at runtime.

There are a couple advantages to unlock by separating the data from the source code, out into a separate file:

* You could imagine wanting to load different questions.yml files on different servers so that you could easily provision different subject-specific quiz servers
* By having the core set of initial questions defined in a flat YAML file in the root of the project, anyone could come along and contribute to the project by opening a pull request adding a bunch of high quality questions across a variety of topics — even if that person weren’t necessarily a developer
* It’s a lot easier to work on application / UI code that is agnostic about the actual data it is displaying. Otherwise, you end up codifying some of your actual data in your source code, making it more difficult, brittle and tedious to change in the future.

## Handling resize events like a pro

Bubbletea makes it easy to handle WindowSizeMsg events, which contain information about the size of the current terminal window. This is very handy not just for ensuring your app looks great even when a user resizes their terminal, but can also help you render custom experiences and even trigger re-paints as needed.

Here’s the WindowSizeMsg handler in my app. As you can see, we’re actually handling two different re-sizable entities in this case within our Update method:

* We size the pager according to the latest width and height of the user’s terminal and. This pager is a scroll-able buffer where I store the contents of the user’s results printout, so that the user can easily scroll up and down through their test results
* We set the width of the progress bar that shows the user how far along through the current quiz they are according to the latest width and height of the user’s terminal

## You can also use WindowSizeMsg to trigger UI re-paints

In the case of Tea Tutor, I render the user’s final score in a Viewport “Bubble”:

![Bubble - Viewport](/bubble-viewport-example.gif)

However, I was noticing an unfortunate bug whenever I ran my app over SSH and connected to it as a client:

Although everything worked perfectly if I just ran go run main.go , whenever I ran my app on a server and connected to it over SSH, my final results were rendered, but not at the correct full height and width of the user’s current terminal.

I knew I had logic in my Update function’s tea.WindowSizeMsg handler that would update the Viewport’s size based on the latest values of the user’s terminal size — so I really just wanted to trigger that logic just as the Viewport was being rendered for the user.

Therefore I decided to implement a separate tea.Cmd here, which is to say a function that returns a tea.Msg , to sleep for half a second and then use the latest terminal size values to render the user’s final report in a way that correctly takes up the full height and width of the current terminal.

It looks like this, and I return this command when the app reaches its displayingResults phase:

```go
func sendWindowSizeMsg() tea.Msg {
 time.Sleep(500 * time.Millisecond)
 width, height, _ := term.GetSize(0)
 return tea.WindowSizeMsg{
  Width:  width,
  Height: height,
 }
}
```

The delay is barely perceptible to the user, if at all, but the result is that the user’s final score report is rendered within the Viewport correctly — taking up the whole available height and width of the current terminal.

## Creating separate navigation functions

I mentioned above that, when I started working with Bubbletea, I ran into frequent crashes due to my mishandling of a slice data type that backed a collection the UI would iterate through.

For example, you can imagine rendering a simple list in a Bubbletea program, and allowing the user to move their “cursor” up and down the list to select an item.

Imagine the model’s cursor field is an int , and that it is incremented each time the user presses the up button or the letter k . Imagine that you have wired up the enter button to select the item in the backing slice at the index of whatever value cursor is currently set to.

In this scenario, it’s easy to accidentally advance the cursor beyond the bounds of the model’s backing slice, leading to a panic when you press enter, because you’re trying to access an index in the slice that is out of bounds.

I tackled this problem by creating separate methods on the model for each of the navigational directions:

```go
case "down", "j":     
  m = m.SelectionCursorDown()  case "up", "k":                                
  m = m.SelectionCursorUp()case "left", "h":                                
  m = m.PreviousQuestion()   case "right", "l":                                
  m = m.NextQuestion()                               
```

Within each of these directional helper methods, I encapsulate all of the logic to safely increment the internal value for cursor — including re-setting it to a reasonable value if it should somehow exceed the bounds of its backing slice:

Here’s the example implementation of SelectionCursorUp :
```go
func (m model) SelectionCursorDown() model {
  if m.playingIntro {  
    return m                              
   }  
   m.cursor++                              
   if m.categorySelection {                               
     if m.cursor >= len(m.categories) {
        m.cursor = 0                               
     }  else {                               
     if m.cursor >= len(m.QuestionBank[m.current].Choices){ 
          m.cursor = 0                               
     }                              
   } 
   return m 
}
```
If we somehow end up with a cursor value that exceeds the actual length of the backing slice, we just set the cursor to 0. The inverse logic is implemented for all other directional navigation functionality.

## Split your View method into many sub-views

As you can see here in my View method, I’m returning several different sub-views depending on the “mode” my Bubbletea app is running in.

There are several boolean values the model has to represent whether a particular phase of the app is running or not, and all the toggling between event states happens in the Update function’s appropriate cases.

I found that when working with multiple views, it’s nice to have your sub-views split out into separate functions that you can then conditionally return depending on your own app’s requirements.

```go
func (m model) View() string {
 s := strings.Builder{}if m.displayingResults {
  s.WriteString(m.RenderResultsView())
 } else if m.playingIntro {
  s.WriteString(m.RenderIntroView())
 } else if m.categorySelection {
  s.WriteString(m.RenderCategorySelectionView())
 } else {
  s.WriteString(m.RenderQuizView())
  s.WriteString(m.RenderQuizProgressView())
 }return s.String()
}
```

This would also work well with a switch statement.

That’s all for this post! Thanks for reading and keep an eye out for the next post in the series!
