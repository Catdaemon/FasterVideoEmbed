# Overview
A simple JavaScript script to delay the loading and rendering of embedded video iframes. This means you can have lots of videos on a page without causing massive page load times and terrible browser performance.

Another advantage to using this script is that because the replaced embed is a div, it can be sized more easily and responsively, and the actual video when clicked will be of the computed size.

# Prerequisites
- jQuery

# Supported Providers
- YouTube
- Vimeo

# Usage
## HTML
Simply include the script, and add a function call to `speedUpEmbeds()` at the end of the page body.
```html
<html>
    <head>
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <script src="/embed.speedup.js"></script>
    </head>

    <body>
        <iframe width="640" height="360" src="//www.youtube.com/embed/dQw4w9WgXcQ?feature=player_detailpage" frameborder="0" allowfullscreen></iframe>

        <script>speedUpEmbeds();</script>
    </body>
</html>

```

## CSS
This script replaces each embed with a div which has two classes: the name of the service, and `unloaded`. For example, `youtube unloaded`. Inside this div is a span with the class `play`, for the play button. Here's some example styling:
```css
/* video */
.unloaded {
        background-color:               black;
        background-position:            center;
        background-size:                cover;
        position:                       relative;
        cursor:                         pointer;
        width:                          100%;
}
/* aspect ratio fix */
.unloaded:before {
    padding-top:                62.5%;
    content:                    "";
    display:                    block;
}
/* play button */
.unloaded.play {
    position:                   absolute;
    top:                        50%;
    left:                       50%;
    width:                      100px;
    height:                     100px;
    margin-left:                -50px;
    margin-top:                 -50px;
    background-image:           url(/play.png);
    background-size:            100%;
}       
```

# License
This script is free software licensed GNU GPL v3. See https://www.gnu.org/licenses/gpl.html