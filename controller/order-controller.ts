import Order from "../model/order-schema";
export const getOrders = async (req:any, res:any) => {
    try {
        const orders = await Order.find({});
        res.status(200).json(orders);
    } catch (error:any) {
        res.status(500).json({ message: "Error in fetching Orders" + error.message })
    }

}
export const createOrder = async (req:any, res:any) => {
    try {
        const { name, email, product, date, quantity } = req.body;
        Order.create({
            user: { name, email }, product, date, quantity
        });
        return res.status(200).josn("successfully created order");
    } catch (error:any) {
        return res.status(500).json({ message: "Error creating order" + error.message });
    }
}