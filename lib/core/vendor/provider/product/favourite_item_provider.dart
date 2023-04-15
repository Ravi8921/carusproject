import 'dart:async';

import '../../api/common/ps_resource.dart';
import '../../api/common/ps_status.dart';
import '../../constant/ps_constants.dart';
import '../../db/common/ps_data_source_manager.dart';
import '../../repository/product_repository.dart';
import '../../utils/utils.dart';
import '../../viewobject/common/ps_value_holder.dart';
import '../../viewobject/product.dart';
import '../common/ps_provider.dart';

class FavouriteItemProvider extends PsProvider<Product> {
  FavouriteItemProvider({
    required ProductRepository? repo,
    required this.psValueHolder,
    int limit = 0,
  }) : super(repo, limit, subscriptionType: PsConst.LIST_OBJECT_SUBSCRIPTION) {
    _repo = repo;

    super.dataList.data = Product().checkDuplicate(dataList.data!);
    notifyListeners();
  }

  ProductRepository? _repo;
  PsValueHolder? psValueHolder;

  PsResource<List<Product>> get favouriteItemList => super.dataList;

  Future<dynamic> loadFavouriteItemList(
    String languageCode,
    {DataConfiguration? dataConfig}) async {
    isLoading = true;
    await _repo!.getAllFavouritesList(
      super.dataListStreamController,
      psValueHolder!.loginUserId,
      psValueHolder!.headerToken,
      languageCode,
      limit,
      offset,
      PsStatus.PROGRESS_LOADING,
      dataConfig ?? super.defaultDataConfig,
    );
  }

  Future<dynamic> nextFavouriteItemList(
    String languageCode,
    {DataConfiguration? dataConfig}) async {
    if (!isLoading && !isReachMaxData) {
      super.isLoading = true;
      await _repo!.getNextPageFavouritesList(
        super.dataListStreamController,
        psValueHolder!.loginUserId,
        psValueHolder!.headerToken,
        languageCode,
        limit,
        offset,
        PsStatus.PROGRESS_LOADING,
        dataConfig ?? defaultDataConfig,
      );
    }
  }

  Future<void> resetFavouriteItemList(
    String languageCode,
    {DataConfiguration? dataConfig}) async {
    isLoading = true;

    updateOffset(0);

    await _repo!.getAllFavouritesList(
      super.dataListStreamController,
      psValueHolder!.loginUserId,
      psValueHolder!.headerToken,
      languageCode,
      limit,
      offset,
      PsStatus.PROGRESS_LOADING,
      dataConfig ?? super.defaultDataConfig,
    );

    isLoading = false;
  }

  Future<dynamic> postFavourite(
    Map<dynamic, dynamic> jsonMap,
    String loginUserId,
    String headerToken,
    String? languageCode,
  ) async {
    isLoading = true;

    isConnectedToInternet = await Utils.checkInternetConnectivity();

    return await _repo!.postFavourite(
      jsonMap,
      isConnectedToInternet,
      PsStatus.PROGRESS_LOADING,
      loginUserId,
      headerToken,
      languageCode
    );
  }
}
