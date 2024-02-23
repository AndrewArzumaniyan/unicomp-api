import Mail from '../helpers/mail.js';

const postFeedback = async (req, res) => {
  const { full_name, category, mark, email, message } = req.body;
  return res.json({ result: await Mail.send(full_name, category, mark, email, message) })
}

export { postFeedback }