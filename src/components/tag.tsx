
export const Tag = ({tag}:{tag:any}) => {
    
    return (
      <div className={`bg-${tag.color}-300 w-fit text-xs py-1 px-2 rounded-md`}>
        #{tag.name}
      </div>
    );
  };