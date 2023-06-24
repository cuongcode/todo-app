
export const Tag = ({tag}:{tag:any}) => {
    
    return (
      <div className={`bg-${tag.color} w-fit text-xs text-gray-700 py-1 px-2 rounded-md`}>
        #{tag.name}
      </div>
    );
  };