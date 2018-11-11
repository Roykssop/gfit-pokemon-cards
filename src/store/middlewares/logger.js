export const logger = store => {
    return next => {
        return action => {
            console.log("[MIDDLEWARE] Action dispatched", action)
            const result = next(action)
            console.log("[MIDDLEWARE] New state", store.getState())
            return result
        }
    }
}