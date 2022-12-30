const express = require('express');
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout,
} = require('../controllers/workoutController');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

// require auth for workout routes
router.use(requireAuth);

//GET all workouts
router.get('/', getWorkouts);

//GET one workout by id
router.get('/:id', getWorkout);

//POST a new workout
router.post('/', createWorkout)    

//DELETE a workout by id
router.delete('/:id', deleteWorkout);

//UPDATE a workout by id
router.patch('/:id', updateWorkout);

module.exports = router;


