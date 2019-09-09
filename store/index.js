import axios from "axios"
import data from "@/static/storedata.json"

export const state = () => ({
    storedata: data,
    cart: []
})

export const getters = {

}