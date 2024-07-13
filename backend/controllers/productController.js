import Product from "../models/productModel.js";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.aggregate([
            {
                $unwind: '$variants', // Unwind the variants array
            },
            {
                $project: {
                    _id: 1,
                    title: 1,
                    desc: 1,
                    categories: 1,
                    'variantId': '$variants._id',
                    'size': '$variants.size',
                    'color': '$variants.color',
                    'price': '$variants.price',
                    'inStock': '$variants.inStock',
                    'img': '$variants.img',
                },
            },
        ]);

        res.status(200).json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};


export const createProduct = async (req, res) => {
    const { title, desc, categories, variants } = req.body;

    try {
        const product = await Product.create({
            title,
            desc,
            categories,
            variants,
        });

        const createdProduct = await product.save();
        res.status(201).json(createdProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { title, desc, img, categories, size, color, price, inStock } = req.body;
    try {
        const product = await Product.findById(id);

        if (product) {
            product.title = title;
            product.desc = desc;
            product.img = img;
            product.categories = categories;
            product.size = size;
            product.color = color;
            product.price = price;
            product.inStock = inStock;

            const updatedProduct = await product.save();
            res.json(updatedProduct);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};


export const getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json(err);
    }
};


export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id);

        if (product) {
            await product.remove();
            res.json({ message: 'Product removed' });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }

};

