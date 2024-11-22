export function SubmitButton({a, onClick}){
    return <>
    <button onClick={onClick} className="bg-black text-white text-l m-3 w-12/12 h-10 shadow hover:bg-white hover:text-black"> {a}</button>
    </>
}