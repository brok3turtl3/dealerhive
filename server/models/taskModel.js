import mongoose from 'mongoose';

const Schema = mongoose.Schema;



const taskSchema = Schema({
	user: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'User',
	},

	name: {
		type: String,
		required: true,
	},
    assignedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    taskDescription: {
        type: String,
        required: true
    },
	
	date: {
		type: Date,
		default: Date.now,
	},
});

const Task = mongoose.model('Task', taskSchema);

export default Task;