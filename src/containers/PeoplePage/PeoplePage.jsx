import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import scss from "./PeoplePage.module.scss";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { getApi } from "../../redux/CreateAsyncThunk";
import { useQueryParams } from "../../components/hooks/UseQueryParams";
import UiLoading from "../../components/UiLoading/UiLoading";

function PeoplePage() {
    const main = useSelector((state) => state.main.main);
    const { status, error } = useSelector((state) => state.main);

    const dispatch = useDispatch();
    const query = useQueryParams();
    const queryPage = query.get("page");

    const [pageNumber, setPageNumber] = useState(queryPage ? parseInt(queryPage) : 1);

    const history = useNavigate();  // Используем useHistory здесь

    useEffect(() => {
        dispatch(getApi({ page: pageNumber }));
        // Обновляем URL при изменении номера страницы
        history(`/people/?page=${pageNumber}`);
    }, [pageNumber, dispatch, history]);

    const handlePageChange = (newPage) => {
        setPageNumber(newPage);
    };

    return (
        <div>
            <div className={scss.button_container}>
                <button className={scss.button} onClick={() => handlePageChange(pageNumber - 1)} disabled={pageNumber === 1}>
                    Назад
                </button>
                <button className={scss.button} onClick={() => handlePageChange(pageNumber + 1)} disabled={pageNumber === 9}>Вперед</button>
            </div>
            <ul className={scss.list__container}>
                {status === "loading" && !error && <UiLoading />}
                {error && <ErrorMessage />}
                {status === "success" &&
                    main.map((el) => (
                        <li key={el.id} className={scss.list__item}>
                            <Link to={`/person/${el.id}`}>
                                {/* Используйте NavLink для создания ссылок с соответствующим URL */}
                                <img className={scss.person__photo} src={el.img} alt="" />
                                <p>{el.name}</p>
                            </Link>
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default PeoplePage;
