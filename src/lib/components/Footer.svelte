<script>
	import { siteOptions } from '$lib/utils/index';
</script>

<footer>
	<ul class="unstyled-list box right">
		<li>
			<a href="mailto:{siteOptions.email}" class="footer-link">email</a>
		</li>

		<li>
			<a href="https://github.com/{siteOptions.github_user}" target="_blank" class="footer-link"> github </a>
		</li>
	</ul>

	<ul class="unstyled-list box left">
		<li>
			<i>{siteOptions.footer_message}</i>
		</li>
		<li>
			<span>v4.0</span>
		</li>
	</ul>
</footer>
