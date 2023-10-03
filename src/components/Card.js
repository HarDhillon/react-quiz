import classNames from 'classnames';

function Card({ children, className, ...rest }) {
    const finalClassNames = classNames(
        'border rounded p-3 shadow-2xl bg-white',
        className
    );

    return (
        <div {...rest} className={finalClassNames}>
            {children}
        </div>
    );
}

export default Card;
