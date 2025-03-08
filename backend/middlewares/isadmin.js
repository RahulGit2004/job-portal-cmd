export const isAdmin = (req, res, next) => {
    const { role } = req.body; // Get role from request body

    if (role !== "Admin") {
        return res.status(403).json({ message: "Access denied. Admins only!" });
    }
    next();
};
