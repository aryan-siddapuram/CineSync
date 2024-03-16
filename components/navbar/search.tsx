import { Input } from "../ui/input"

export function Search() {
  return (
    <div>
      <Input
        type="search"
        placeholder="Search..."
        className="md:w-[80px] lg:w-[250px] bg-background"
      />
    </div>
  )
}