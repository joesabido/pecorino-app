import Axios from 'axios'

class Api{
	constructor(){
		this.basepath = 'http://localhost:3000/api'
	}

	get = async (url) => {
		return await Axios.get(`${this.basepath}${url}`)
	}

	post = async (url, data) => {
		return await Axios.post(`${this.basepath}${url}`, data || {})
	}

	put = async (url, data) => {
		return await Axios.put(`${this.basepath}${url}`, data || {})
	}

	patch = async (url, data) => {
		return await Axios.patch(`${this.basepath}${url}`, data || {})
	}

	delete = async (url) => {
		return await Axios.delete(`${this.basepath}${url}`)
	}
}

export default new Api()