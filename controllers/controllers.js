const workerModel = require('../models/home');
const postModel = require('../models/newPost');

const home = async (req, res) =>{
    try {
       res.status(200).json({message:'Home is responsed!!'}) 
    } catch (error) {
       res.status(500).json({message:'Internal server error'}) 
    }
    
}

const post = async (req, res) => {
    try {
        const posts = await postModel.find();
         res.status(200).json(posts)
        
    } catch (error) {
        res.status(500).json({message:'Internal server error!!'})
    }
}

const workers = async (req, res) =>{
    try {
        res.status(200).json({message:'Workerpage is responsed!!'})
    } catch (error) {
       res.status(500).json({message:'Internal server error'}) 
    }
}
const newPost = async (req, res) => {
    try {

        const { name, number,details, type } = req.body;

        const newPost = await postModel.create({
            name,
            number,
            details,
            type,
            img: req.file.filename
        });

        res.status(201).json({
            message: 'Post created Successfully!!',
            newPost
        });

    } catch (error) {

        res.status(500).json({
            message: 'Internal server error!!'
        });

    }
}


const profile = async (req, res) =>{
    try {
        res.status(200).json({message:'Profile'})
    } catch (error) {
        res.status(500).json({message:'Internal server error!!'})
    }
}

const updateProfile = async (req, res) =>{
    try {
        res.status(200).json({message:'Profile Updated!!'}) 
    } catch (error) {
        res.status(500).json({message:'Internal server error!!'})
    }
}

const deleteProfile = async (req, res) =>{
    try {
        res.status(200).json({message:'Profile Deleted!!'}) 
    } catch (error) {
        res.status(500).json({message:'Internal server error!!'})
    }
}


const deletePost = async (req, res) =>{
    try {
        res.status(200).json({message:'Post Deleted!!'})
    } catch (error) {
        res.status(500).json({message:'Internal server error!!'})
    }
}

const deleteWorker = async (req, res) =>{
    try {
        res.status(200).json({message:'Worker Deleted!!'})
    } catch (error) {
        res.status(500).json({message:'Internal server error!!'})
    }
}

const login = async (req, res) =>{
    try {
        res.status(200).json({message:'Login Success!!'})
    } catch (error) {
        res.status(500).json({message:'Internal server error!!'})
    }
}

const logout = async (req, res) =>{
    try {
        res.status(200).json({message:'Logout Success!!'})
    } catch (error) {
        res.status(500).json({message:'Internal server error!!'})
    }
}


const register = async (req, res) =>{
    try {
        res.status(200).json({message:'Register Success!!'})

    } catch (error) {
        res.status(500).json({message:'Internal server error!!'})
    }   
}

const services = async (req, res) =>{
    try {
        res.status(200).json({message:'Services is responsed!!'})
    } catch (error) {
        res.status(500).json({message:'Internal server error!!'})
    }
}

const contact = async (req, res) =>{
    try {
        res.status(200).json({message:'Contact is responsed!!'})
    } catch (error) {
        res.status(500).json({message:'Internal server error!!'})
    }
}

const about = async (req, res) =>{
    try {
        res.status(200).json({message:'About is responsed!!'})
    } catch (error) {
        res.status(500).json({message:'Internal server error!!'})
    }
}

const subscription = async (req, res) =>{
    try {
        res.status(200).json({message:'Subscription is responsed!!'})   
    } catch (error) {
        res.status(500).json({message:'Internal server error!!'})
    }
}

//Worker of specific type
const workerType = async (req, res) =>{
    try {
        const specificWorker = await workerModel.find({profession:req.params.profession})
         .then(worker=>{
             if(worker.length>0){   
                res.status(200).json(specificWorker)
             } else{
                res.status(404).json({message:'No worker found of this type!!'})
             }  
            })
    } catch (error) {
        res.status(500).json({message:'Internal server error!!'})
    }
}




const dev = async (req, res) =>{
    try {
        res.status(200).json({message:'Dev is responsed!!'})
    } catch (error) {
        res.status(500).json({message:'Internal server error!!'})
    }   
}

const controllers = {
    home,
    post,
    workers,
    newPost,
    profile,
    updateProfile,
    deleteProfile,
    deletePost,
    deleteWorker,
    login,
    logout,
    register,
    services,
    contact,
    about,
    subscription,
    dev,
    workerType
}   


module.exports = controllers