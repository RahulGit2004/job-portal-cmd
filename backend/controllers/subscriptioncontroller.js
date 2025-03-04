import Subscription from "../models/subscription.js";

// Create a new subscription plan
export const createSubscription = async (req, res) => {
    try {
        const { planName, price, duration, features, status } = req.body;
        const newSubscription = new Subscription({ planName, price, duration, features, status });
        await newSubscription.save();
        res.status(201).json({ success: true, message: "Subscription plan created!", data: newSubscription });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error creating plan", error: error.message });
    }
};

// Get all subscription plans
export const getAllSubscriptions = async (req, res) => {
    try {
        const subscriptions = await Subscription.find();
        res.status(200).json({ success: true, data: subscriptions });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error fetching plans", error: error.message });
    }
};

// Get a single subscription plan by ID
export const getSubscriptionById = async (req, res) => {
    try {
        const subscription = await Subscription.findById(req.params.id);
        if (!subscription) {
            return res.status(404).json({ success: false, message: "Subscription not found" });
        }
        res.status(200).json({ success: true, data: subscription });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error fetching plan", error: error.message });
    }
};

// Update subscription plan
export const updateSubscription = async (req, res) => {
    try {
        const updatedSubscription = await Subscription.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedSubscription) {
            return res.status(404).json({ success: false, message: "Subscription not found" });
        }
        res.status(200).json({ success: true, message: "Subscription updated", data: updatedSubscription });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error updating plan", error: error.message });
    }
};

// Delete subscription plan
export const deleteSubscription = async (req, res) => {
    try {
        const deletedSubscription = await Subscription.findByIdAndDelete(req.params.id);
        if (!deletedSubscription) {
            return res.status(404).json({ success: false, message: "Subscription not found" });
        }
        res.status(200).json({ success: true, message: "Subscription deleted" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error deleting plan", error: error.message });
    }
};
