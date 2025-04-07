interface Data {
  description: string
}

export default function MostReadFormat({ data, index }: { data: Data, index: number },) {
  return (
    <div className="flex items-start">
      <div className="text-xl font-bold text-gray-400 mr-3">{index + 1}</div>
      <h3 className="font-medium">
        <a href="#" className="hover:text-red-600">
          {data.description}
        </a>
      </h3>
    </div>
  )
}