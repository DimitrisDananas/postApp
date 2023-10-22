const postService = require('../services/post.services');

exports.create = async (req,res) => {
    const data = req.body;
    console.log("Insert post ", data.title);

    try {
        const result = await postService.create(data)
        res.status(200).json({status:true, data: result});
        console.log("Succes in saving post");
    } catch (error) {
        res.status(400).json({status:false, data: error});
        console.log("Problem in saving post");
    }
}

exports.findAll = async(req,res) => {
    console.log("Find all posts");

    try {
        const result = await postService.findAll();
        res.status(200).json({status:true, data: result});
        console.log("Succes in finding all posts");
    } catch (error) {
        res.status(400).json({status:false, data: error});
        console.log("Problem in finding all posts", error);
    }
}

exports.findOne = async(req,res) => {
    const id = req.params.id
    console.log("Find one post");

    try {
        const result = await postService.findOne(id);
        res.status(200).json({status:true, data: result});
        console.log("Succes in finding the post");
    } catch (error) {
        res.status(400).json({status:false, data: error});
        console.log("Problem in finding the post", error);
    }
}

exports.updatePost = async(req,res) => {
    const id = req.params.id
    console.log("Update post woth id", id);

    try {
        const result = await postService.updatePost(req.body);
        res.status(200).json({status:true, data: result});
        console.log("Succes in updating the post");
    } catch (error) {
        res.status(400).json({status:false, data: error});
        console.log("Problem in updateing the post", error);
    }
}

exports.updateCategory = async(req,res) => {
    const id = req.params.id
    console.log("Update post category");

    try {
        const result = await postService.updateCategory(req.body);
        res.status(200).json({status:true, data: result});
        console.log("Succes in updating the post category");
    } catch (error) {
        res.status(400).json({status:false, data: error});
        console.log("Problem in updating the post category", error);
    }
}

exports.deletePost = async(req,res) => {
    const id = req.params.id
    console.log("Delete post");

    try {
        const result = await postService.deletePost(id);
        res.status(200).json({status:true, data: result});
        console.log("Succes in deleting post");
    } catch (error) {
        res.status(400).json({status:false, data: error});
        console.log("Problem in deleting post", error);
    }
}

exports.deleteCategories = async(req,res) => {
    const id = req.params.id
    console.log("Remove categories");

    try {
        const result = await postService.deleteCategories(req.body);
        res.status(200).json({status:true, data: result});
        console.log("Succes in removing post categories");
    } catch (error) {
        res.status(400).json({status:false, data: error});
        console.log("Problem in removing post categories", error);
    }
}