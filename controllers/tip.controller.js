async function addNewTip(data) {
  const tipData = await Tip.create({
    include: [
      {
        model: User,
        attributes: ["userName"],
      },
      { model: Tip,
        attributes: ["topic", "content"] },
    ],
  });

  return tipData;
}

module.exports = { addNewTip };
