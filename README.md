# Barberama

Barberama is a brand new, modern barber shop for those wanting a special kind of cut.

This was a coding project I created to practice new techniques I'd learned in regards to advanced CSS and also in using Sass. The whole design and concept of the barber shop was created by myself. I used the 7-1 Sass architecture to structure my code, and believe this was very intuitive and worked very well - I much preferred this approach, opposed to vanilla CSS.

The biggest task during this project ended up being the implementation of the custom carousel using JavaScript. I spent a good two days researching this, but eventually coded my own custom carousel that works as expected. The carousel includes 3 images that automatically slide to the left upon loading the page. There are also indicators that, when clicked, correspond to the expected images and slide that image into view. This is also and pause and play button that when used, no matter what image the user is on, the carousel continues from that image.

Other key points I took from this project where how to implement Sass properly into a project, how to write Sass effectively - using variables and mixins for the first time (however, this project took just under a week, so feel I gained a very good grasp of Sass by the end, and will be using it primarily from now on). I also heavily utilised the nesting capabilities of Sass to great extent and enjoyed this feature of the library immensely.

For the responsive design of this site, I utilised a specific technique which involved storing my specific breakpoints in a map, then used a custom mixin with an if/else statement to notify me of any spelling mistakes, or otherwise to loop through the map and find the desired breakpoint. This worked so much better than the vanilla CSS way of simply creating a long list of media queries in one file. It was a welcome change.

Although this wasn't the first time I'd used them, I also implemented some keyframes to animate some simple transitions upon loading the website initially.

Overall, this was an excellent lesson in many modern web development techniques and technologies. Although it's far from perfect (the goal of this project was never to create a perfect website, but merely to practice techniques to produce a rudimentary product), I believe this website could be the foundations for building a very usable and impressive company website.

You can view the website HERE().

TODO:

[] = Implement responsive images using density switching, and the <picture> element.
[] = Use Css to implement responsive images too.
[] = Make desktop navigation sticky.
[] = Improve overall lighthouse score.
