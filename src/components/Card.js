import classNames from 'classnames';

function Card({ children, className, userCorrect, selectedChoice, ...rest }) {
    const finalClassNames = classNames(
        'border rounded p-6 text-center shadow-2xl',
        className
    );

    return (
        <div {...rest} className={finalClassNames}>
            {children}
        </div>
    );
}

export default Card;
