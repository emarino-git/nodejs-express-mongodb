module.exports = mongoose => {
    const Tutorial = mongoose.model(
      "tutorial",
      mongoose.Schema(
        {
          nroInventario: String,
          title: String,
          description: String,
          published: Boolean,
          marca: String,
          modelo: String
        },
        { timestamps: true }
      )
    );
    return Tutorial;
  };