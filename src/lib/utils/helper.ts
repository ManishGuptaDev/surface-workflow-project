export const generateRandomSurfaceTagId = () => {
    return 'tag_' + Math.random().toString(36).substr(2, 9); 
}