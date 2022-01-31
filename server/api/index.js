const router = require("express").Router();
const { db, Album, Artist, Song } = require("../db/index.js");
const Sequelize = require("sequelize");

// connect your API routes here!

router.get("/albums", async (req, res, next) => {
  try {
    const albums = await Album.findAll({
      include: {
        model: Artist,
        required: true,
      },
    });
    console.log("this should be albums-->", albums);
    res.send(albums);
  } catch (err) {
    console.log("this is an error message-->", err);
  }
});

router.get("/albums/:id", async (req, res, next) => {
  try {
    const albums = await Album.findOne({
      include: [
        {
          model: Artist,
        },
        { model: Song, required: true },
       
      ],
      where: {
        id:req.params.id
    }
    });
    console.log("this should be albums-->", albums);
    res.send(albums);
  } catch (err) {
    console.log("this is an error message-->", err);
  }
});

module.exports = router;
