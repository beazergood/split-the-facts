import React from 'react'
import Link from 'next/link'

export interface ButtonProps {
  label: string
  href?: string
}

export const Button: React.FC<ButtonProps> = ({ label, href = '' }) => {
  return (
    <>
      <style jsx>
        {`
          .pushable {
            min-width: 250px;
            position: relative;
            border: none;
            background: transparent;
            padding: 0;
            cursor: pointer;
            outline-offset: 4px;
            transition: filter 250ms;
          }
          .shadow {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 12px;
            background: hsl(0deg 0% 0% / 0.25);
            will-change: transform;
            transform: translateY(2px);
            transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
          }
          .edge {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 12px;
            background: linear-gradient(
              to left,
              hsl(340deg 66%, 82%) 0%,
              hsl(340deg 66% 32%) 8%,
              hsl(340deg 66% 32%) 92%,
              hsl(340deg 66% 16%) 100%
            );
          }
          .front {
            display: block;
            position: relative;
            padding: 12px 42px;
            border-radius: 12px;
            font-size: 1.25rem;
            color: #94a661;
            background: hsl(65, 66%, 82%);
            will-change: transform;
            transform: translateY(-4px);
            transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
          }
          .pushable:hover {
            filter: brightness(110%);
          }
          .pushable:hover .front {
            transform: translateY(-6px);
            transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
          }
          .pushable:active .front {
            transform: translateY(-2px);
            transition: transform 34ms;
          }
          .pushable:hover .shadow {
            transform: translateY(4px);
            transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
          }
          .pushable:active .shadow {
            transform: translateY(1px);
            transition: transform 34ms;
          }
          .pushable:focus:not(:focus-visible) {
            outline: none;
          }
        `}
      </style>
      {href && (
        <Link href={href}>
          <button className="pushable">
            <span className="shadow"></span>
            <span className="edge"></span>
            <span className="front">{label}</span>
          </button>
        </Link>
      )}
      {!href && (
        <button className="pushable">
          <span className="shadow"></span>
          <span className="edge"></span>
          <span className="front">{label}</span>
        </button>
      )}
    </>
  )
}
