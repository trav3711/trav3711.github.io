window.onload = function(){
  PhotosLibrarySettings settings =
     PhotosLibrarySettings.newBuilder()
    .setCredentialsProvider(
        FixedCredentialsProvider.create(/* Add credentials here. */))
    .build();

  try (PhotosLibraryClient photosLibraryClient =
      PhotosLibraryClient.initialize(settings)) {

      // Create a new Album  with at title
      Album createdAlbum = photosLibraryClient.createAlbum("My Album");

      // Get some properties from the album, such as its ID and product URL
      String id = album.getId();
      String url = album.getProductUrl();

  } catch (ApiException e) {
      // Error during album creation
  }

}
