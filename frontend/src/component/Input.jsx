export function Inputbox({label , placeholder}){
    return<>
    <div className="h- grid grid-cols-1 pl-8">
        <label htmlFor={label} className="p-2 font-semibold">Enter your {label} : </label>
        <input type="text"className="px-2 py-1 mb-3 shadow" placeholder={placeholder}/>
        </div></>
}