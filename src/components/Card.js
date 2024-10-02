import classNames from 'classnames';

function Card({ children, className, userCorrect, selectedChoice, ...rest }) {
    const finalClassNames = classNames(
        'border rounded p-6 text-center shadow-2xl',
        userCorrect && selectedChoice ? 'bg-green-200' : '',
        !userCorrect && selectedChoice ? 'bg-red-200' : '',
        className
    );

    return (
        <div {...rest} className={finalClassNames}>
            {children}
        </div>
    );
}

export default Card;
