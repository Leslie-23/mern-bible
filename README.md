![The MERN Bible Logo](https://i.imgur.com/uh9ib8o.png)
# The MERN Bible
### A King James Version Bible reference powered by the [Bible SuperSearch API](https://api.biblesupersearch.com/)
## Screenshots
![Home page](https://i.imgur.com/TLXCAtY.png)
![Looking up text](https://i.imgur.com/MIeaOeA.png)
![Saved verses](https://i.imgur.com/khtA3Rg.png)


## Technologies Used
- MongoDB
- Express
- React
- Node
- TailwindCSS
- HeadlessUI
- Browser testing done in Microsoft Edge

## Planning
### Trello Board
[Trello](https://trello.com/b/4Mi5b7wl/mern-bible)
### ERD
![ERD](https://i.imgur.com/8ZCZJUF.png)

## Logo
The logo was made using the [Inkscape](https://inkscape.org/) vector graphics software.
## How It Works
Whether or not a user is signed in, they can search for and read Bible chapters. If a user is signed in, they can save verses to their list. "Verse-adding mode" is enabled by clicking on any one verse in the chapter and then clicking on the "+" button adjacent to the verse numbers". A user can remove verses from their list via clicking one, and then clicking the adjacent "-" button. 
## Link to Site
[Heroku](https://mern-bible.herokuapp.com/)
## Next Steps
There are several additional functionalities that would improve The MERN Bible's UX and UI:
- Notes attached to saved verses
- Sophisticated/custom error and confirmation messages
- Page navigation and providing modern Bible translations available. (Bible SuperSearch would be a limiting factor to making these possible, due to its 1000/day rate limit and some modern translations not being available. Another Bible API would have to be used.)
