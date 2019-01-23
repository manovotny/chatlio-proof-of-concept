import Link from 'next/link';

const Navigation = () =>
    <ul>
        <li>
            <Link href="/" prefetch>
                <a>{'Home'}</a>
            </Link>
        </li>
        <li>
            <Link href="/about" prefetch>
                <a>{'About'}</a>
            </Link>
        </li>
        <li>
            <Link href="/contact" prefetch>
                <a>{'Contact'}</a>
            </Link>
        </li>
    </ul>

export default Navigation;
