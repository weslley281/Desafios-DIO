from typing import List
from uuid import UUID
import pytest
from store.core.exceptions import NotFoundException
from store.schemas.product import ProductOut, ProductUpdateOut
from store.usecases.product import product_usecases


async def test_usecases_should_return_sucess(product_in):
    result = await product_usecases.create(body=product_in)

    assert isinstance(result, ProductOut)
    assert result.name == "Iphone 14 pro Max"


async def test_usecases_get_should_return_success(product_inserted):
    result = await product_usecases.get(id=product_inserted.id)

    assert isinstance(result, ProductOut)
    assert result.name == "Iphone 14 pro Max"


async def test_usecases_get_should_not_found():
    with pytest.raises(NotFoundException) as err:
        await product_usecases.get(id=UUID("1d37ae03-20ef-4124-8a73-b293960c4dde"))

    assert (
        err.value.message
        == "Product not found with filter: 1d37ae03-20ef-4124-8a73-b293960c4dde"
    )


@pytest.mark.usefixtures("products_inserted")
async def test_usecases_query_should_return_success():
    result = await product_usecases.query()

    assert isinstance(result, List)
    assert len(result) > 1


async def test_usecases_update_should_return_success(product_up, product_inserted):
    product_up.price = "7.500"
    result = await product_usecases.update(id=product_inserted.id, body=product_up)

    assert isinstance(result, ProductUpdateOut)


async def test_usecases_delete_should_return_sucess(product_inserted):
    result = await product_usecases.delete(id=product_inserted.id)

    assert result is True


async def test_usecases_delete_should_not_found():
    with pytest.raises(NotFoundException) as err:
        await product_usecases.delete(id=UUID("1d37ae03-20ef-4124-8a73-b293960c4dde"))

    assert (
        err.value.message
        == "Product not found with filter: 1d37ae03-20ef-4124-8a73-b293960c4dde"
    )
