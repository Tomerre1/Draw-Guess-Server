const router = require('express').Router();
const randomWords = require('random-words');

router.get('/:mode', async (req, res) => {
  const { mode } = req.params;
  const modeMap = {
    easy: { minLength: 3, maxLength: 4 },
    normal: { minLength: 5, maxLength: 5 },
    hard: { minLength: 6 },
  };
  try {
    const words = await randomWords({ exactly: 50, ...modeMap[mode] });
    const filterWords = words.filter(
      (word) => word.length >= modeMap[mode].minLength
    );
    res.json(filterWords.slice(0, 3));
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
