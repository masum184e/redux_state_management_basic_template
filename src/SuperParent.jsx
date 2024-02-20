import Parent from "./Parent"

const SuperParent = () => {
    return (
        <div>
            <h3>I&apos;m from Super Parent</h3>
            <Parent />
        </div>
    )
}

export default SuperParent