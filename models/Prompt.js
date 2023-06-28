import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: [true, "creator is required!"],
    ref: "User",
  },
  prompt: {
    type: String,
    required: [true, "prompt is required!"],
  },
  tage: String,
});

const Prompt = models.Prompt || model("Prompt", PromptSchema);

export default Prompt;
