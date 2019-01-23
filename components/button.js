const Button = ({children, ...props}) =>
    <button {...props}>
        {children}
        <style jsx>
            {`
                button {
                  color: #fff;
                  background: #000;
                  display: inline-block;
                  width: 200px;
                  height: 50px;
                  border: 2px solid #000;
                  font-size: 12px;
                  text-transform: uppercase;
                  transition: background 0.2s ease, color 0.2 ease, color 0.2 ease;
                  cursor: pointer;
                  text-align: center;
                  user-select: none;
                  position: relative;
                  overflow: hidden;
                  transition: border 0.2s, background 0.2s, color 0.2s ease-out;
                  border-radius: 5px;
                }

                button:hover {
                  border: 2px solid #000;
                  background: transparent;
                  color: #000;
                }
          `}
        </style>
    </button>

export default Button
