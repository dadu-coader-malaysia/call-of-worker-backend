

const home = (req, res) =>{
    try {
       res.status(200).json({message:'Home is responsed!!'}) 
    } catch (error) {
       res.status(500).json({message:'Internal server error'}) 
    }
    
}

const post = (req, res) => {
    try {
        res.status(200).json({message:'Postpage is responsed!!'})
    } catch (error) {
        res.status(500).json({message:'Internal server error!!'})
    }
}

const workers = (req, res) =>{
    try {
        res.status(200).json({message:'Workerpage is responsed!!'})
    } catch (error) {
       res.status(500).json({message:'Internal server error'}) 
    }
}

const newPost = (req, res) =>{
    try {
        res.status(200).json({message:'Success!!'})
    } catch (error) {
        res.status(500).json({message:'Internal server error!!'})
    }
}


const profile = (req, res) =>{
    try {
        res.status(200).json({message:'Profile'})
    } catch (error) {
        res.status(500).json({message:'Internal server error!!'})
    }
}

const updateProfile = (req, res) =>{
    try {
        res.status(200).json({message:'Profile Updated!!'}) 
    } catch (error) {
        res.status(500).json({message:'Internal server error!!'})
    }
}

const deleteProfile = (req, res) =>{
    try {
        res.status(200).json({message:'Profile Deleted!!'}) 
    } catch (error) {
        res.status(500).json({message:'Internal server error!!'})
    }
}


const deletePost = (req, res) =>{
    try {
        res.status(200).json({message:'Post Deleted!!'})
    } catch (error) {
        res.status(500).json({message:'Internal server error!!'})
    }
}

const deleteWorker = (req, res) =>{
    try {
        res.status(200).json({message:'Worker Deleted!!'})
    } catch (error) {
        res.status(500).json({message:'Internal server error!!'})
    }
}

const login = (req, res) =>{
    try {
        res.status(200).json({message:'Login Success!!'})
    } catch (error) {
        res.status(500).json({message:'Internal server error!!'})
    }
}

const logout = (req, res) =>{
    try {
        res.status(200).json({message:'Logout Success!!'})
    } catch (error) {
        res.status(500).json({message:'Internal server error!!'})
    }
}


const register = (req, res) =>{
    try {
        res.status(200).json({message:'Register Success!!'})

    } catch (error) {
        res.status(500).json({message:'Internal server error!!'})
    }   
}

const services = (req, res) =>{
    try {
        res.status(200).json({message:'Services is responsed!!'})
    } catch (error) {
        res.status(500).json({message:'Internal server error!!'})
    }
}

const contact = (req, res) =>{
    try {
        res.status(200).json({message:'Contact is responsed!!'})
    } catch (error) {
        res.status(500).json({message:'Internal server error!!'})
    }
}

const about = (req, res) =>{
    try {
        res.status(200).json({message:'About is responsed!!'})
    } catch (error) {
        res.status(500).json({message:'Internal server error!!'})
    }
}

const subscription = (req, res) =>{
    try {
        res.status(200).json({message:'Subscription is responsed!!'})   
    } catch (error) {
        res.status(500).json({message:'Internal server error!!'})
    }
}


const dev = (req, res) =>{
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
    dev
}   


module.exports = controllers