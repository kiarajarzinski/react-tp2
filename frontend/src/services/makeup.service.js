const BASE_URL = 'http://localhost:3000/api'

export const getMakeupService = async () => {
    const res = await fetch(`${BASE_URL}/makeup`)
    const data = await res.json()
    return data.makeup || []
}

export const createMakeupService = async (makeup) => {
    const res = await fetch(`${BASE_URL}/makeup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(makeup),
    })
    return res.json()
}

export const updateMakeupService = async (id, makeup) => {
    const res = await fetch(`${BASE_URL}/makeup/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(makeup),
    })
    return res.json()
}

export const deleteMakeupService = async (id) => {
    const res = await fetch(`${BASE_URL}/makeup/${id}`, {
        method: 'DELETE',
    })
    return res.json()
}