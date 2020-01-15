const express = require("express");
const router = express.Router();
const Film = require("./film")

router.get("/films", (req, res) => {
    Film.find({})
        .then(film => {
            res.send(film)
        });
});

router.post("/films", (req, res) => {
    Film.create(req.body)
        .then(film => {
            res.send(film)
        });
});


router.put("/films/:id", (req, res) => {
    Film.findByIdAndUpdate({ _id: req.params.id }, req.body)
        .then(() => {
            Film.findOne({ _id: req.params.id })
                .then(film => {
                    res.send(film);
                });
        });
});


router.delete("/films/:id", (req, res) => {
    Film.deleteOne({ _id: req.params.id })
        .then(film => {
            res.send(film)
        });
});

module.exports = router;
