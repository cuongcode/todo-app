
export const Tag = ({tag}:{tag:any}) => {
    let bgColor
    if (tag.color === 'red') {
      bgColor = 'bg-red-300'
    }
    if (tag.color === 'yellow') {
      bgColor = 'bg-yellow-300'
    }
    if (tag.color === 'green') {
      bgColor = 'bg-green-300'
    }
    if (tag.color === 'blue') {
      bgColor = 'bg-blue-300'
    }
  
    return (
      <div className={`${bgColor} w-fit text-xs py-1 px-2 rounded-md`}>
        #{tag.name}
      </div>
    );
  };