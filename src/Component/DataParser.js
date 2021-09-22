export function getTime(timestamp){
	const dt = new Date(timestamp * 1000)
	const time = `${dt.getHours()}:${dt.getMinutes()}`	
	return time
}

export function getDate(timestamp){
	const dt = new Date(timestamp * 1000)
	const fullDate = `${dt.getDate()}/${dt.getMonth() + 1}/${dt.getFullYear()}`	
	return fullDate
}

export function getTemp(temp){
	return `${Math.round(temp)}°`
}

export function getFeels_like(feels_like){
	return `${Math.round(feels_like)}°`
}

export function getIcon(id, icon){
	const q = icon.charAt(icon.length-1) === "d" ? "day" : "night"
	const i = `wi wi-owm-${q}-${id}`
	return i
}

export function getPop(pop){
	return `${pop.toFixed() * 100}%`
}

export function getHumidity(humidity){
	return `${humidity}%`
}

export function getPressure(pressure){
	return `${pressure} mb`
}

export function getVisibility(visibility){
	return `${visibility / 1000} km`
}

export function getUvi(uvi){
	return `${uvi} of 10`
}

export function getWind_speed(ws){
	return `${ws} km/h`
}

export function getDew_point(dp){
	return `${Math.round(dp)}°`
}