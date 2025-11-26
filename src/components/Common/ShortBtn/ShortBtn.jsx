const ShortBtn = ({shortBtnText}) => {
    return (
        <div>
            <button className="btn mr-2 border-[#293241] bg-[#fdfcdc] hover:bg-[#293241] text-[#293241] hover:text-[#fdfcdc] transition-all duration-200 hover:-translate-y-0.5">{shortBtnText}</button>
        </div>
    );
};

export default ShortBtn;