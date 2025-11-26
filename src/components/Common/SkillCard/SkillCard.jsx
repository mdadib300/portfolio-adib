

const SkillCard = ({skill}) => {
    return (
        <div className="inline-block bg-[#e0fbfc] py-3 px-4 flex justify-center rounded-md my-2 mr-2">
            <p className="text-[#293241] font-bold text-lg">{skill}</p>
        </div>
    );
};

export default SkillCard;