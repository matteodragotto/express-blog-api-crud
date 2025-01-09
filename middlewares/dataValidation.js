const dataValidation = (req, res, next) => {
  const {title, content, image, tags} = req.body

  if (!title || typeof title !== "string") {
    throw new Error ("Title deve contenere una stringa")
  }

  if (!tags || !Array.isArray(tags) || tags.length === 0) {
    throw new Error ("Tags deve essere un array e contenere almeno un elemento")
  }
}

module.exports = dataValidation