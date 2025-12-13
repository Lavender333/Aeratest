import mongoose from 'mongoose';

const broadcastSchema = new mongoose.Schema(
  {
    orgId: { type: String, index: true, unique: true, required: true },
    message: { type: String, default: '' },
  },
  { timestamps: true }
);

export const Broadcast = mongoose.models.Broadcast || mongoose.model('Broadcast', broadcastSchema);
