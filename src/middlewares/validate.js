export const validate = (schema) => {
    return (req, res, next) => {
        const data = schema.safeParse({
            body: req.body,
            params: req.params,
            query: req.query
        })

        if (!data.success) {
            return res.status(400).json({
                message: "Validation Failed",
                errors: data.error.flatten()
            })
        }

        next();
    }
}