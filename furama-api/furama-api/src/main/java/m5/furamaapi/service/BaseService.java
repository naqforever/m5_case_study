package m5.furamaapi.service;

import java.util.List;

public interface BaseService<T> {
    T save(T t);
    List<T> findAll();
    int delete(int id);
}
