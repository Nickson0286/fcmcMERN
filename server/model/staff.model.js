module.exports = (mongoose) => {
  const Staff = mongoose.model(
    "staff",
    mongoose.Schema(
      {
        name: String,
        title: String,
        active: Boolean,
      },
      { timestamps: true }
    )
  );

  return Staff;
};
